package handlers

import (
	productdto "kalbeonlineshop/dto/product"
	resultdto "kalbeonlineshop/dto/result"
	"kalbeonlineshop/models"
	"kalbeonlineshop/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

var downloadFile = "http://localhost:5000/uploads/"

type handlerProduct struct {
	ProductRepository repositories.ProductRepository
}

func HandlerProduct(ProductRepository repositories.ProductRepository) *handlerProduct {
	return &handlerProduct{ProductRepository}
}

func (h *handlerProduct) CreateNewProduct(c echo.Context) error {
	dataImage := c.Get("dataImage").(string)

	request := new(productdto.CreateProductRequest)

	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{
			Code:    http.StatusInternalServerError,
			Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{
			Code:    http.StatusBadRequest,
			Message: err.Error()})
	}

	Quantity, err := strconv.Atoi(c.FormValue("quantity"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{
			Code:    http.StatusBadRequest,
			Message: "Quantity harus berupa angka"})
	}

	Price, err := strconv.Atoi(c.FormValue("price"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{
			Code:    http.StatusBadRequest,
			Message: "Harga beli harus berupa angka"})
	}

	product := models.Product{
		ProductCode: c.FormValue("productCode"),
		ProductName: c.FormValue("productName"),
		Quantity:    Quantity,
		Price:       Price,
		Image:       dataImage,
	}

	data, err := h.ProductRepository.CreateProduct(product)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{
			Code:    http.StatusBadRequest,
			Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccessResult{Code: http.StatusOK, Data: convertResponseProduct(data)})
}

func (h *handlerProduct) GetAllProduct(c echo.Context) error {
	products, err := h.ProductRepository.FindProducts()
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccessResult{Code: http.StatusOK, Data: products})
}

func (h *handlerProduct) GetProductById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	product, err := h.ProductRepository.GetProduct(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccessResult{Code: http.StatusOK, Data: product})
}

func (h *handlerProduct) UpdateDataProduct(c echo.Context) error {
	dataImageUpdate := c.Get("dataImage").(string)

	id, _ := strconv.Atoi(c.Param("id"))
	product, err := h.ProductRepository.GetProduct(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	var productCode = c.FormValue("productCode")
	if productCode != "" {
		product.ProductCode = productCode
	}

	var productName = c.FormValue("productName")
	if productName != "" {
		product.ProductName = productName
	}

	var quantitystr = c.FormValue("quantity")
	if quantitystr != "" {
		quantity, err := strconv.Atoi(quantitystr)
		if err != nil {
			return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{
				Code:    http.StatusBadRequest,
				Message: "Harga jual harus berupa angka"})
		}
		product.Quantity = quantity
	}

	var PriceStr = c.FormValue("price")
	if PriceStr != "" {
		price, err := strconv.Atoi(PriceStr)
		if err != nil {
			return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{
				Code:    http.StatusBadRequest,
				Message: "Harga Beli harus berupa angka"})
		}
		product.Price = price
	}


	var dataImage = dataImageUpdate
	if dataImage != "" {
		product.Image = dataImage
	}

	data, err := h.ProductRepository.UpdateProduct(product)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccessResult{Code: http.StatusOK, Data: convertResponseProduct(data)})
}

func (h *handlerProduct) DeleteDataProduct(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	product, err := h.ProductRepository.GetProduct(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, resultdto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.ProductRepository.DeleteProduct(product, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, resultdto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, resultdto.SuccessResult{Code: http.StatusOK, Data: convertResponseProduct(data)})
}

func convertResponseProduct(u models.Product) productdto.ProductResponse {
	return productdto.ProductResponse{
		ProductID: u.ProductID,
		ProductCode: u.ProductCode,
		ProductName: u.ProductName,
		Quantity: u.Quantity,
		Price:      u.Price,
		Image:     u.Image,
	}
}

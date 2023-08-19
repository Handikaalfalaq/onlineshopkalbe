package productdto

type CreateProductRequest struct {
	ProductID int    `json:"ProductId"`
	ProductCode string `json:"productCode" form:"productCode"`
	ProductName string    `json:"productName" form:"productName"`
	Quantity int    `json:"quantity" form:"quantity"`
	Price      int    `json:"price" form:"price"`
	Image     string `json:"image" form:"image"`
}
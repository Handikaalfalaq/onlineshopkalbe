package productdto

type ProductResponse struct {
	ProductID int    `json:"productId"`
	ProductCode string `json:"productCode" form:"productCode"`
	ProductName string    `json:"productName" form:"productName"`
	Quantity int    `json:"quantity" form:"quantity"`
	Price      int    `json:"price" form:"price"`
	Image     string `json:"image" form:"image"`
}
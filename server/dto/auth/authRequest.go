package authdto

type AuthRequest struct {
	CustomerId   int    `json:"customerId" gorm:"primary_key"`
	Email        string `json:"email" gorm:"varchar(255)" validation:"required"`
	Password     string `json:"password" gorm:"varchar(255)" validation:"required"`
	CustomerName string `json:"customerName" gorm:"varchar(255)" validation:"required"`
	Role         string `json:"role"`
	Token        string `json:"token"`
}

type LoginRequest struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
}

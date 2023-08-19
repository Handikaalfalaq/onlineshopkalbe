package usersdto

import "time"

type CreateUserRequest struct {
	CustomerName string `json:"customerName" form:"customerName" validate:"required"`
	Email        string `json:"email" form:"email" validate:"required"`
	Password     string `json:"password" form:"password" validate:"required"`
}

type UpdateUserRequest struct {
	CustomerName    string    `json:"customerName" gorm:"varchar(255)"`
	CustomerAddress string    `json:"customerAddress" gorm:"varchar(255)"`
	Gender          string    `json:"gender" gorm:"varchar(255)"`
	TanggalLahir    string    `json:"tanggalLahir" gorm:"varchar(255)"`
	UpdateAt        time.Time `json:"update_at"`
}

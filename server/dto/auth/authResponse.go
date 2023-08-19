package authdto

type LoginResponse struct {
	CustomerId          int    `json:"customerid" gorm:"primary_key"`
	Email       string `json:"email" gorm:"varchar(255)"`
	Password    string `json:"password" gorm:"varchar(255)"`
	CustomerName    string `json:"customerName" gorm:"varchar(255)"`
	CustomerAddress string `json:"customerAddress"`
	Gender         string `json:"gender" gorm:"varchar(255)"`
	TanggalLahir   string `json:"tanggalLahir" gorm:"varchar(255)"`
	Role        string `json:"role"`
	Token       string `json:"token"`
}

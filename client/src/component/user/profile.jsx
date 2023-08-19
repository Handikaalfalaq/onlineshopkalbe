function Profile() {
    return(
        <div className="containerProfile">
            <div className="containerDataUser">
                <div className="">Customer Id : </div>
                <div className="">Customer Name : </div>
                <div className="">Customer Address : </div>
                <div className="">Gender : </div>
                <div className="">Tanggal Lahir: </div>
                <div className="">Update : </div>
            </div>

            <div className="containerTitleDataPembelian">
                <div className="titleDataPembelian">Data Pembelian</div>
            </div>

            <div className="tableDataPembelian">
                <div>SO ID</div>
                <div>Product Name</div>
                <div>Date Order</div>
                <div>Quantity</div>
            </div>

            <div className="dataPembelian">
                <div>1</div>
                <div>Prenagen Mommy</div>
                <div>18/08/2023</div>
                <div>15</div>
            </div>

            <div className="dataPembelian2">
                <div>2</div>
                <div>Prenagen Mommy</div>
                <div>18/08/2023</div>
                <div>12</div>
            </div>
        </div>
    )
}

export default Profile
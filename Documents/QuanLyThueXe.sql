CREATE DATABASE QuanLyThueXe
GO

USE QuanLyThueXe
GO

CREATE TABLE DangKy
(
	TenDangNhap nvarchar(30) primary key,
	MatKhau nvarchar(20) not null,
	Ten nvarchar(50) not null,
	CMND int not null,
	SDT TINYINT not null,
	MaQuyen varchar(10) not null

	FOREIGN KEY (MaQuyen) REFERENCES dbo.Quyen(MaQuyen)
)
GO

CREATE TABLE DangNhap
(
	MaTK varchar(10) primary key,
	TenDangNhap nvarchar(30) not null,
	MatKhau nvarchar(20) not null

	Foreign key (TenDangNhap) References dbo.DangKy(TenDangNhap)
)
GO

CREATE TABLE Quyen
(
	MaQuyen varchar(10) primary key
)
GO

CREATE TABLE DSXe
(
	MaXe int identity primary key,
	MaLoai int not null,
	TenXe varchar(20) not null,
	GiaThue money not null,
	MaChoNgoi int not null,
	BienSo nvarchar(20) not null,
	DonGia money not null,
	TinhTrang nvarchar(30) not null

	Foreign key (MaLoai) references dbo.LoaiXe(MaLoai),
	Foreign key (MaChoNgoi) references dbo.ChoNgoi(MaChoNgoi),
)
GO

CREATE TABLE LoaiXe
(
	MaLoai int identity primary key,
	Loai varchar(20) not null,
)
GO

CREATE TABLE ChoNgoi
(
	MaChoNgoi int identity primary key,
	SoCho int not null,
)
GO

CREATE TABLE DichVu
(
	MaDV int identity primary key,
	TenDV nvarchar(30) not null,
)
GO

CREATE TABLE ThueXe
(
	MaThue int identity primary key,
	MaXe int not null,
	MaDV int not null,
	NgayDi date not null,
	NgayVe date not null,
	DiemDonXe nvarchar(50) not null,
	DiemTraXe nvarchar(50) not null,
	GioNhanXe time  not null,
	GioTraXe time not null,
	TinhTrang nvarchar(30) not null

	Foreign key (MaXe) References dbo.DSXe(MaXe),
	Foreign key(MaDV) References dbo.DichVu(MaDV)
)
GO

CREATE TABLE HoaDon
(
	MaHD int identity primary key,
	MaThue int not null,
	MaTK varchar(10) not null,
	TongTien money not null

	Foreign key (MaThue) References dbo.ThueXe(MaThue),
	Foreign key(MaTK) References dbo.DangNhap(MaTK)
)
GO
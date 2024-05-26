// src/redux/productsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Producto 1', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzp0sOvtoOUoAgxwKyA1FXxeQZhKI0lZzZo_D0jnxww&s' },
  { id: 2, name: 'Producto 2', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysBASP97NZwKwK1n7xWAYvb65aFfjNMii8p8jKbkeQaBP54mukElMkXSnIBDjgr6kPqU&usqp=CAU' },
  { id: 3, name: 'Producto 3', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdh--ZiyVd8rZMBR0pMAKBfVpyylL-40R4FYVHSfV_WM7T-ujLwm3fgsj_EWD_VzeujGA&usqp=CAU' },
  { id: 4, name: 'Producto 4', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrM9-3NSGTFuJXlhPSuwpkl870TGWZFdrMxs8lvckbtgiXrsPrulwGivR5cZSwNtDIS4&usqp=CAU' },
  { id: 5, name: 'Producto 5', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWjRyfbEPp-ZDRowU_GNgj8qd3uPpbey8y-fHOPg_ks3YeYFuvyt3kXKgEtiptQJm2_Y&usqp=CAU' },
  { id: 6, name: 'Producto 6', price: 600, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcfJOQbHI0RjIHNNrhAGnSdNRdcXA4a7S8Wg&s' },
  { id: 7, name: 'Producto 7', price: 700, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BM9lVHqWddLYT171OnA-3tKqV8blD0ScYA&s' },
  { id: 8, name: 'Producto 8', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVDqrW8Kk2xUHWn62rGDNguV7qfFsk9Tfm6A&s' },
  { id: 9, name: 'Producto 9', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMjIDq3qfuATJomILqBAQ0anCNk5cm48EwA&s' },
  { id: 10, name: 'Producto 10', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSYsvjmepFrAenViwJsNB1Xsf7FqfuWv0NUCh1s2dVCGx5QvS6zocEa35uQnTY0UtL3A&usqp=CAU' },
  { id: 11, name: 'Producto 11', price: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRw_czIVBYvF5G2YhY8aTe4Xu1wjDyi3rLYzI8TCu9VI1ZX_CztLbfHc0_RiTfnZqOrc&usqp=CAU' },
  { id: 12, name: 'Producto 12', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNc-vKvgThStqz5Dw63Vjm1ymmJQjF5MOyVP6LQ6SiZdsOo4i0Khp3YmBxRm0IeHh0k0&usqp=CAU' },
  { id: 13, name: 'Producto 13', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H-VdAz_TwFDi2RLx2vttREWL_sBsxCTWsTp-zSau0qOYlAdV6oPPKzPT_d3jA6Ypt1Q&usqp=CAU' },
  { id: 14, name: 'Producto 14', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswz6iPhgO1f577B-PieW16YUq5ZN8l5T0GgMsX7zsjXPlUAKdFeWjt_9DAPC4NmYCBxU&usqp=CAU' },
  { id: 15, name: 'Producto 15', price: 6000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbQPQQxb_20BRjd6oGj6Dm1CM-OahZC4oNPNF3xag9VSnTLVjRbdW1d-FUiO_khsLW8A&usqp=CAU' },
  { id: 16, name: 'Producto 16', price: 7000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrYXc9iWrwJg1_qaUYa6r8zXS2dGHJniLDIzCykF2zP5YO5QTH9knBV4zsJuC6arswMM&usqp=CAU' },
  { id: 17, name: 'Producto 17', price: 8000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_g_LqecyKUGs44vZbtvldARjE3pI5bAiIa_5dIQraOEJ7Sn5FX4VzQtC__AcE15BvUg&usqp=CAU' },
  { id: 18, name: 'Producto 18', price: 9000, image: 'https://tiendas3b.com/wp-content/uploads/2022/09/pure-de-tomate-herdez-300x300.jpg' },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export default productsSlice.reducer;

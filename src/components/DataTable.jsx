import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Date", width: 110 },
  { field: "invoiceNumber", headerName: "InvoiceNumber", width: 110 },
  { field: "customerName", headerName: "CustomerName", width: 130 },
  { field: "billingAddress", headerName: "BillingAddress", width: 130 },
  { field: "shippingAddress", headerName: "ShippingAddress", width: 130 },
  { field: "gstin", headerName: "GSTIN", width: 110 },
  { field: "items", headerName: "Items", width: 110 },
  { field: "billSundrys", headerName: "BillSundrys", width: 110 },
  { field: "totalAmount", headerName: "TotalAmount", width: 110 },
];

const rows = [
  {
    id: 1,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 2,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 3,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 4,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 5,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 6,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 7,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 8,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 9,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
  {
    id: 10,
    date: "1/2/2023",
    invoiceNumber: "#1",
    customerName: "Satyam",
    billingAddress: "Bangalore",
    shippingAddress: "Bangalore",
    gstin: "1234",
    items: "Book",
    billSundrys: "dummy",
    totalAmount: 4534,
  },
];

export default function DataTable() {
  return (
    <>
    <br />
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </>
  );
}

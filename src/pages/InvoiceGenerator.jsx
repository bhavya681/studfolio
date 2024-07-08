import { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';

const InvoiceGenerator = () => {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({
    type: 'Invoice',
    client: '',
    amount: '',
    dueDate: '',
    description: '',
    companyName: '',
    companyAddress: '',
    customerAddress: '',
    invoiceNumber: '',
    invoiceDate: '',
    tax: '',
    terms: 'Payment is due within 15 days'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({ ...newInvoice, [name]: value });
  };

  const addInvoice = () => {
    if (validateInvoice(newInvoice)) {
      setInvoices([...invoices, newInvoice]);
      resetForm();
    }
  };

  const validateInvoice = (invoice) => {
    return (
      invoice.client &&
      invoice.amount &&
      invoice.dueDate &&
      invoice.description &&
      invoice.companyName &&
      invoice.invoiceNumber &&
      invoice.invoiceDate
    );
  };

  const resetForm = () => {
    setNewInvoice({
      type: 'Invoice',
      client: '',
      amount: '',
      dueDate: '',
      description: '',
      companyName: '',
      companyAddress: '',
      customerAddress: '',
      invoiceNumber: '',
      invoiceDate: '',
      tax: '',
      terms: 'Payment is due within 15 days'
    });
  };

  const downloadPDF = (invoice) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(invoice.type, 20, 20);
    doc.setFontSize(12);
    doc.text(`From: ${invoice.companyName}`, 20, 30);
    doc.text(`Address: ${invoice.companyAddress}`, 20, 35);
    doc.text(`Bill To: ${invoice.client}`, 20, 45);
    doc.text(`Customer Address: ${invoice.customerAddress}`, 20, 50);
    doc.text(`Invoice #: ${invoice.invoiceNumber}`, 20, 60);
    doc.text(`Invoice Date: ${invoice.invoiceDate}`, 20, 65);
    doc.text(`Due Date: ${invoice.dueDate}`, 20, 70);

    doc.autoTable({
      startY: 80,
      head: [['Description', 'Amount', 'Tax']],
      body: [
        [invoice.description, invoice.amount, invoice.tax]
      ]
    });

    doc.text(`Subtotal: ${parseFloat(invoice.amount)}`, 20, doc.autoTable.previous.finalY + 10);
    doc.text(`Total: ${parseFloat(invoice.amount) + parseFloat(invoice.tax)}`, 20, doc.autoTable.previous.finalY + 15);
    doc.text(`Terms: ${invoice.terms}`, 20, doc.autoTable.previous.finalY + 25);

    doc.save(`invoice_${invoice.invoiceNumber}.pdf`);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl text-center font-bold mb-8">Invoice Generator</h1>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Invoice Type</label>
          <select
            name="type"
            value={newInvoice.type}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="Invoice">Invoice</option>
            <option value="Tax Invoice">Tax Invoice</option>
            <option value="Proforma Invoice">Proforma Invoice</option>
            <option value="Receipt">Receipt</option>
            <option value="Sales Receipt">Sales Receipt</option>
            <option value="Cash Receipt">Cash Receipt</option>
            <option value="Quote">Quote</option>
            <option value="Estimate">Estimate</option>
            <option value="Credit Memo">Credit Memo</option>
            <option value="Credit Note">Credit Note</option>
            <option value="Purchase Order">Purchase Order</option>
            <option value="Delivery Note">Delivery Note</option>
          </select>
          <input
            type="text"
            name="companyName"
            placeholder="Your Company or Name"
            value={newInvoice.companyName}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="companyAddress"
            placeholder="Address"
            value={newInvoice.companyAddress}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="client"
            placeholder="Client Name"
            value={newInvoice.client}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="customerAddress"
            placeholder="Customer's Billing Address"
            value={newInvoice.customerAddress}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newInvoice.amount}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            name="tax"
            placeholder="Tax"
            value={newInvoice.tax}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            name="dueDate"
            value={newInvoice.dueDate}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            name="invoiceNumber"
            placeholder="Invoice #"
            value={newInvoice.invoiceNumber}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            name="invoiceDate"
            value={newInvoice.invoiceDate}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newInvoice.description}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <textarea
            name="terms"
            placeholder="Terms & Conditions"
            value={newInvoice.terms}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            onClick={addInvoice}
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Add Invoice
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Invoices</h2>
          {invoices.map((invoice, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-md shadow-md">
              <p className="text-lg font-semibold">{invoice.client}</p>
              <p>Amount: ${invoice.amount}</p>
              <p>Due Date: {invoice.dueDate}</p>
              <p>Description: {invoice.description}</p>
              <button
                onClick={() => downloadPDF(invoice)}
                className="mt-2 bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;

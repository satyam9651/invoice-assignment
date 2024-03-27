import React from 'react'


function InvoiceDetailComponent() {
  return (
    <form>
      <div>
        <FormLabel>Username</FormLabel>
        <TextField size='sm' />
      </div>
      <div>
        <FormLabel>Password</FormLabel>
        <TextField />
      </div>
    </form>
  )
}

export default InvoiceDetailComponent;

import React from 'react'

export const useCategoryTopicsDialog = () => {
  const [open, setOpen] = React.useState(false)

  return { state: { open }, functions: { setOpen } }
}

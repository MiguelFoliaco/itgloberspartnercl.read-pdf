import React, { useEffect, useState } from 'react'

type props = {
  pdfUrl: string;
  width: string;
  height: string;
}

export const PDFReader = ({ height, pdfUrl, width }: props) => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div>
      {
        mounted && (
          <div className='flex justify-center'>
            <object
              data={pdfUrl}
              type='application/pdf'
              width={width}
              height={height}
            >
              <iframe title='PDF View' src={pdfUrl} width={width} height={height}>
                <p>Asegurese que el pdf exista o que el navegador soporte PDF</p>
              </iframe>
            </object>
          </div>
        )
      }
    </div>
  )
}

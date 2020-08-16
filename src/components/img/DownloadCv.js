import React from 'react'

function DownloadCv(props) {
  return (
    <svg 
      width={props.width} 
      height={props.height} 
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 512 512'
    >
      <path 
        fill={props.fill} 
        d="M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"
      />
    </svg>
  )
}

export default DownloadCv

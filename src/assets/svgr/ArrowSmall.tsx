import * as React from 'react'

const ArrowSmall = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    fill={props.fill}
    fillRule="evenodd"
    height="8"
    viewBox="0 0 14 8"
  >
    <path
      d="M385.566,1052.24l-0.016.01h10.67l-2.117-2.03a0.531,0.531,0,0,1-.161-0.38,0.508,0.508,0,0,1,.161-0.37l0.329-.32a0.579,0.579,0,0,1,.778,0l3.63,3.48a0.508,0.508,0,0,1,0,.74l-3.63,3.48a0.579,0.579,0,0,1-.778,0l-0.329-.32a0.506,0.506,0,0,1,0-.74l2.141-2.04H385.558a0.558,0.558,0,0,1-.558-0.54v-0.44A0.556,0.556,0,0,1,385.566,1052.24Z"
      transform="translate(-385 -1049)"
    />
  </svg>
)

ArrowSmall.defaultProps = {
  fill: '#00a4f3'
}

export default ArrowSmall

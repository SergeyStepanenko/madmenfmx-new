import * as React from 'react'

const ArrowCarousel = (props: any) => (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    width={props.width}
  >
    <g>
      <g>
        <polygon
          fill={props.fill}
          points="157.9,0 98.1,59.7 294.4,256 98.1,452.3 157.9,512 413.9,256"
        />
      </g>
    </g>
  </svg>
)

ArrowCarousel.defaultProps = {
  fill: '#052554',
  width: '14px'
}

export default ArrowCarousel

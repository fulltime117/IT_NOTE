import React, { useState, useEffect } from 'react'
import helmetData from '../../helmetdata.json'


import {
  Fcontainer,
  FReader
} from './styles'


export const RoadMap = (props) => {
  const { searchNum } = props

  // //////////////////////////////////////////////////////////////////////////////
  const strDatas = helmetData?.kpress?.stringData
  const appBaseUrl = helmetData?.kpress?.baseUrl
  const [frameNum, setFrameNum] = useState(0)
  const [file, setFile] = useState(null)
  const [list, setList] = useState(null)

  const handleFile = (data) => {
    const valid = list[frameNum].indexOf('PL')
    if (valid > -1) {
      setFile(data?.homepage + data?.description + list[frameNum])
      console.log('C:', frameNum + '/' + (list.length - 1), 'LF:', list[frameNum])
      return
    }
    setFile(data?.homepage + list[frameNum])
    console.log('C:', frameNum + '/' + (list.length - 1), 'SF:', list[frameNum])
  }

  useEffect(() => {
    if (!(strDatas.includes('https://f'))) return console.log('---> not ready connection')
    fetch(
      strDatas
    ).then(async (response) => {
      const data = await response.json()
      const _array = data
        .map(function (d) {
          return d.vin_number
        })
      // const _array = Object.keys(data)
      //   .map(function (key) {
      //     return data[key]
      //   })
      setList(_array)
      console.log('T: ', _array.length - 1)
    }).catch(error => {
      console.log('problem with your fetch operation:', error)
    })
  }, [strDatas])

  useEffect(() => {
    if (!(list && list.length > 0 && appBaseUrl)) return
    fetch(
      appBaseUrl
    ).then(async (response) => {
      const data = await response.json()
      handleFile(data)
    }).catch(error => {
      console.log('There has been a problem with your fetch base url:', error)
    })
  }, [list, appBaseUrl, frameNum])

  useEffect(() => {
    if (searchNum) {
      setFrameNum(searchNum)
    }
  }, [searchNum])

  // useEffect(() => {
  //   console.log('file: ', file)
  // }, [file])

  // //////////////////////////////////////////////////////////////////////////////

  return (
      <Fcontainer id='markF'>
        {file
          ? (
            <div className='po-relative'>
              <div className='f-wrapper'>
                <FReader
                  width='220'
                  height='144'
                  src={file}
                  frameBorder='0'
                  id='Ifplay'
                />
              </div>
              <div className='f-pushe' />
              <div className='f-next' />
              <div className='f-frame' />
              {/* <div className='f-list' /> */}
              <div className='f-close' />
            </div>
          ) : (
            <div className='f-error'>No have fetch data</div>
          )}
      </Fcontainer>
  )
}

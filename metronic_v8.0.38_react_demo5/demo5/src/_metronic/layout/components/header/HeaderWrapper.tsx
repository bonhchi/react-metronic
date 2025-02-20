/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header, aside} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      >
        {/* begin::Aside mobile toggle */}
        {aside.display && (
          <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
            <div
              className='btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px'
              id='kt_aside_toggle'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-2x mt-1' />
            </div>
          </div>
        )}
        {/* end::Aside mobile toggle */}

        <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0 w-lg-225px me-5'>
          <div
            className='btn btn-icon btn-active-icon-primary ms-n2 me-2 d-flex d-lg-none'
            id='kt_aside_toggle'
          >
            <KTSVG path='media/icons/duotune/abstract/abs015.svg' className='svg-icon-1' />
          </div>

          <Link to='/'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo-demo5.svg')}
              className='d-none d-lg-inline h-30px'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/logo-demo5-mobile.svg')}
              className='d-lg-none h-25px'
            />
          </Link>
        </div>

        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          <div className='d-flex align-items-stretch'>
            {header.left === 'menu' && (
              <div className='d-flex align-items-stretch' id='kt_header_nav'>
                <Header />
              </div>
            )}
          </div>

          <Topbar />
        </div>
      </div>
    </div>
  )
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

import './styles.css'
import Model from 'components/Model'
import { data } from './feedata'

const pageButtonRenderer = ({ page, active, disable, title, onPageChange }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onPageChange(page)
  }
  const activeStyle = {}
  if (active) {
    activeStyle.backgroundColor = 'black'
    activeStyle.color = 'white'
  } else {
    activeStyle.backgroundColor = '#EEEEEE'
    activeStyle.color = 'black'
  }
  if (typeof page === 'string') {
    activeStyle.backgroundColor = 'white'
    activeStyle.color = 'black'
  }
  return (
    <li className="page-item">
      <a href="#" onClick={handleClick} style={activeStyle}>
        {page}
      </a>
    </li>
  )
}

const options = {
  pageButtonRenderer
}

const ManageVariantsTable = () => {
  function hyperLink(cell, row) {
    {
      return (
        <span>
          <Model cell={cell} data={data} type="feetable" />
        </span>
      )
    }
  }

  const columns = [
    // {
    //   dataField: 'id',
    //   text: 'Product ID',
    //   sort: true
    // },
    {
      dataField: 'code',
      text: 'Variant Code',
      sort: true,
      formatter: hyperLink
    },
    {
      dataField: 'description',
      text: 'Variant Description',
      sort: true,
      formatter: hyperLink
    },
    {
      dataField: 'services',
      text: 'Value',
      sort: true
    }
  ]
  return (
    <>
      <div
        style={{
          backgroundColor: '#605B56',
          color: '#FFFFFF',
          Height: '40px',
          textAlign: 'right',
          padding: '10px'
        }}
      >
        Service Scope: TollGuard
      </div>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        headerWrapperClasses="foo"
        pagination={paginationFactory(options)}
        selectRow={{ mode: 'checkbox' }}
      />
    </>
  )
}

export default ManageVariantsTable

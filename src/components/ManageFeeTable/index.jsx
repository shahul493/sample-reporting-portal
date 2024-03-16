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

const ManageFeeTable = () => {
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
      dataField: 'name',
      text: 'Name',
      sort: true
    },
    {
      dataField: 'code',
      text: 'Code',
      sort: true,
      formatter: hyperLink
    },
    {
      dataField: 'description',
      text: 'Description',
      sort: true,
      formatter: hyperLink
    },
    {
      dataField: 'services',
      text: 'Services',
      sort: true
    },
    {
      dataField: 'category',
      text: 'Category',
      sort: true
    },
    {
      dataField: 'startdate',
      text: 'Start Date',
      sort: true
    },
    {
      dataField: 'enddate',
      text: 'End Date',
      sort: true
    },
    {
      dataField: 'createddate',
      text: 'Created Date',
      sort: true
    }
  ]

  const expandRow = {
    onlyOneExpanding: true,
    renderer: (row) => (
      <div>
        <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
        <p>
          You can render anything here, also you can add additional data on
          every row object
        </p>
        <p>
          expandRow.renderer callback will pass the origin row object to you
        </p>
      </div>
    ),
    showExpandColumn: true,
    expandColumnPosition: 'right'
  }
  return (
    <>
      <span>feee</span>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        striped
        headerWrapperClasses="foo"
        pagination={paginationFactory(options)}
        selectRow={{ mode: 'checkbox' }}
        expandRow={expandRow}
      />
    </>
  )
}

export default ManageFeeTable

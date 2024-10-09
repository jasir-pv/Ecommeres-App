
import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    ${mobile({ width: "0 20px%",dispay:"flex", flexDirection:"column" })}

`
const FilterText = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0" })}

`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}

`
const Option = styled.option`
    
`

const ProductList = () => {

  const location = useLocation()
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  
  const handFilters = (event)=>{
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]:value,
      
    })
  }


  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter> <FilterText> Filter Products </FilterText>
        <Select name='color' onChange={handFilters}>
          <Option  disabled >
            Color
          </Option>
          <Option>white</Option>
          <Option>black</Option>
          <Option>red</Option>
          <Option>yellow</Option>
          <Option>green</Option>
          
        </Select>
        <Select name='size' onChange={handFilters}>
          <Option disabled >
            Size
          </Option>
          <Option>XS</Option>
          <Option>L</Option>
          <Option>M</Option>
          <Option>S</Option>
        </Select>
        </Filter>

        <Filter> <FilterText> Sort Products </FilterText>
        <Select onChange={e=>setSort(e.target.value)}>
        <Option value="newest" >Newest</Option>
          <Option value="oldest">Oldest</Option>
          <Option value="asc">Price (asc)</Option>
          <Option value="desc">Price (desc)</Option>
        </Select>
         </Filter>
      </FilterContainer>
      <Products cat= {cat} filters={filters} Sort= {sort} />
      <Newsletter />
      <Footer/>
    </Container>
  )
}

export default ProductList



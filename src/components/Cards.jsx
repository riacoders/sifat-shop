import React from 'react'
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Slider, { SliderThumb } from '@mui/material/Slider';
import styled from '@emotion/styled';
import { CiHeart } from 'react-icons/ci';

const Cards = () => {
    function ValueLabelComponent(props) {
        const { children, value } = props;
      
        return (
          <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
          </Tooltip>
        );
      }
      
      ValueLabelComponent.propTypes = {
        children: PropTypes.element.isRequired,
        value: PropTypes.number.isRequired,
      };
    const AirbnbSlider = styled(Slider)(({ theme }) => ({
        color: '#5c5dc7',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
            height: 20,
            width: 20,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&:hover': {
            boxShadow: '0 0 0 3px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
            },
        },
        '& .MuiSlider-track': {
            height: 3,
        },
       
    }));
    function AirbnbThumbComponent(props) {
        const { children, ...other } = props;
        return (
          <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
          </SliderThumb>
        );
      }
      
    AirbnbThumbComponent.propTypes = {
        children: PropTypes.node,
    };
    const colors = [
        { name: "Синий", color: "bg-blue-600", count: 3 },
        { name: "Красный", color: "bg-red-600", count: 1 },
        { name: "Комбинированный", color: "bg-purple-600", count: 1 },
        { name: "Серый", color: "bg-gray-500", count: 1 },
        { name: "Белый", color: "bg-white border-2 border-black", count: 1 },
      ];
      const popular = [
        {
          id: 4,
          title: 'Женские джинсы',
          price: '199 990 сум',
          originalPrice: '329 990 сум',
          discount: '-39%',
          imageUrl: 'https://picsum.photos/200/200'
        },
        {
          id: 4,
          title: 'Женские джинсы',
          price: '199 990 сум',
          originalPrice: '329 990 сум',
          discount: '-19%',
          imageUrl: 'https://picsum.photos/200/201'
        },
        {
          id: 4,
          title: 'Женские джинсы',
          price: '199 990 сум',
          originalPrice: '329 990 сум',
          discount: '-29%',
          imageUrl: 'https://picsum.photos/200/202'
        },
        {
          id: 4,
          title: 'Женские джинсы',
          price: '199 990 сум',
          originalPrice: '329 990 сум',
          discount: '-9%',
          imageUrl: 'https://picsum.photos/200/203'
        },
        {
          id: 4,
          title: 'Женские джинсы',
          price: '199 990 сум',
          originalPrice: '329 990 сум',
          discount: '-14%',
          imageUrl: 'https://picsum.photos/200/204'
        },
        {
          id: 4,
          title: 'Женские джинсы',
          price: '199 990 сум',
          originalPrice: '329 990 сум',
          discount: '-20%',
          imageUrl: 'https://picsum.photos/200/205'
        }
      ];
  return (
    <div className='flex'>
      <div class="w-1/4 p-4 border-r border-gray-200">
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Kategoriyalar</h2>
            <div>
                <label class="block">
                    <input type="checkbox" class="mr-4 w-4 h-4"/>
                     <a href="#">Erkaklar uchun </a>
                </label>
                <label class="block">
                    <input type="checkbox" class="mr-4 w-4 h-4"/>
                    Одежда
                </label>
                <label class="block">
                    <input type="checkbox" class="mr-4 w-4 h-4"/>
                    Пиджаки и костюмы
                </label>
            </div>
        </div>
     
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Наличие</h2>
            <div>
                <label class="block">
                    <input type="checkbox" class="mr-2 w-4 h-4"/>
                    В магазине Bulavka
                </label>
                <label class="block">
                    <input type="checkbox" class="mr-2 w-4 h-4"/>
                    На складе поставщика
                </label>
            </div>
        </div>
      
        <div class="mb-4 w-full ">
            <h2 class="text-2xl font-semibold mb-2">Цена</h2>
            <div className='flex gap-2 '>
            <AirbnbSlider
                 min={100}
                 max={2000}
                 slots={{ thumb: AirbnbThumbComponent }}
                 getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                 defaultValue={[200,1500]}
                 // onChange={handleSliderChange}
                  valueLabelDisplay="on"
                 step={10}
                  valueLabelFormat={(value) => <span style={{ color: 'white',  }}>{value}</span>}
            />


        </div>

        </div>
        
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Размер</h2>
            <div class="grid grid-cols-2 gap-2">
                <label class="block"><input type="checkbox" class="mr-2 w-4 h-4 "/> 2XL</label>
                <label class="block"><input type="checkbox" class="mr-2 w-4 h-4 "/> 46</label>
                <label class="block"><input type="checkbox" class="mr-2 w-4 h-4 "/> 48</label>
                <label class="block"><input type="checkbox" class="mr-2 w-4 h-4 "/> 50</label>
                <label class="block"><input type="checkbox" class="mr-2 w-4 h-4 "/> 54</label>
                <label class="block"><input type="checkbox" class="mr-2 w-4 h-4 "/> L</label>
            </div>
        </div>
       
       
       
        <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Цвет</h2>
            <div>
            <div>
        {colors.map((color) => (
          <label key={color.name} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            {/* Rang doirasi */}
            <span
              className={`w-4 h-4 rounded-full ${color.color} mr-2 inline-block`}
            ></span>
            {color.name} ({color.count})
          </label>
        ))}
      </div>
            </div>
        </div>
    </div>
    <div className='w-full  ml-10 mt-12'>
        <div className='flex items-center justify-center gap-10 flex-wrap'>
          {popular.length > 0 ? (
            popular.map((item) => (
              <div className='flex flex-col gap-1' key={item.id}>
                <div className='relative flex   p-2 overflow-hidden rounded-md h-[350px] w-[250px]'>
                  <img src={item.imageUrl} alt={item.title} className='' />
                  <span className='absolute  rounded-md  w-10 h-5  bg-orange-500 text-white flex items-center justify-start z-10 font-semibold'>{item.discount}</span>
                  <CiHeart className='absolute bottom-2 right-2 text-4xl  text-white  cursor-pointer hover:text-blue-600 p-1 rounded-full' /> 
                </div>
                <div className='flex flex-col'>
                  <p> <a href="#">{item.title}</a></p>
                  <span>{item.price}</span>
                  <del className='text-gray-500'>{item.originalPrice}</del>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Hech qanday mahsulot mavjud emas.</p>
          )}
        </div>
      </div> <br /> <br /> 
  
    </div>
  )
}

export default Cards

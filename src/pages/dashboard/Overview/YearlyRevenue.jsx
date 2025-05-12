import React from 'react'
import { Select, Title } from '@mantine/core';
import Chart from 'react-apexcharts'
const YearlyRevenue = () => {
  return (
    <div className=' border-1 border-[#292929] rounded-xl p-5 mt-5 w-full'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-white text-xl lg:text-3xl font-bold'>
            Yearly Revenue
          </h1>
        </div>
        <div className='flex items-center gap-2'>
          <div className="flex">
            <p className='text-[#7C7C7C] text-sm font-bold'>
              Showing :
            </p>
          </div>
          <div className='w-28'>
            <Select className=' bg-none text-sm font-bold '
              placeholder="select"
              data={['This Year', 'Angular', 'Vue', 'Svelte']}
              defaultValue="This Year"
              clearable
              classNames={{
                input:
                  'bg-black-900 border-none outline-none text-sm font-bold text-[#00DEC3]',
                dropdown: 'bg-zinc-900 border border-zinc-700',
                item:
                  'text-[#00DEC3] hover:bg-zinc-800 hover:text-white data-[selected]:bg-zinc-800',
                placeholder: 'text-[#00DEC3]',
              }}
            />
          </div>
        </div>
      </div>
      <div className='mt-10 '>
        <Chart
          type="bar"
          // width="100%"
          height="100%"
          series={[{ data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }]}
          options={{
            colors: ["#00DEC3", "#00DEC3"],
            plotOptions: {
              bar: {
                borderRadius: 5,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            Title: {
              text: 'Yearly Revenue',
              align: 'left',
              style: {
                fontSize: '20px',
                text: 'black',
                fontFamily: 'DMSans',
                fontWeight: 700,
              },
              colors: ['#00DEC3'],
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                labels: {
                  style: {
                    colors: '#00DEC3',
                    fontSize: '12px',
                    fontFamily: 'DMSans',
                    fontWeight: 700,
                  },
                },
              },
              Title: {
                text: 'Yearly Revenue',
              }
            },
          }}
        ></Chart>
      </div>
    </div>
  )
}

export default YearlyRevenue

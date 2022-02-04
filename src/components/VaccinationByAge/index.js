import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {
  VaccinationByAgeContainer,
  VaccinationByAgeHeading,
} from './styledComponents'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <VaccinationByAgeContainer>
      <VaccinationByAgeHeading>Vaccination by age</VaccinationByAgeHeading>
      <ResponsiveContainer width={1000} height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="30%"
            data={vaccinationByAge}
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </VaccinationByAgeContainer>
  )
}

export default VaccinationByAge

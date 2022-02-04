import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #161625;
  display: flex;
  justify-content: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  max-width: 1110px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

export const CustomImgLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const WebsiteName = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #2cc6c6;
  font-weight: 700;
  line-height: 1.5;
  margin-left: 12px;
`
export const CustomDescription = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #cbd5e1;
  font-size: normal;
  font-weight: 500;
  line-height: 1.5;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FailureViewImg = styled.img`
  height: 60vh;
  margin: 10px;
`
export const FailureViewHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
  line-height: 1.4;
  text-align: center;
`

export const LoaderViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

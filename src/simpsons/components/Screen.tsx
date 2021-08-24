import styled from 'styled-components/macro';

/* useful colours:
#376faa
*/

// REMEMBER: You can only make changes inside the template string ``
const Screen = styled.div.attrs({
  'data-testid': 'screen',
})`
  background: #376faa;
  border: 8px solid black;
  border-radius: 80px;
  height: 450px;
  width: 600px;
`;

export default Screen;

import Typography from 'typography'
import elkGlenTheme from 'typography-theme-elk-glen'

elkGlenTheme.overrideStyles = () => ({
    'h1': {
        fontSize: '4.5rem'
    }
})

const typography = new Typography(elkGlenTheme)
export const { scale, rhythm, options } = typography
export default typography
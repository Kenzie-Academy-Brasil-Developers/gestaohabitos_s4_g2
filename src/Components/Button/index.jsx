
import {Container} from './indexStyle';

const Button = ({children, ...rest}) => {

    return(
       <Container {...rest}>
        {children}
        </Container> 
    )  
}

export default Button;
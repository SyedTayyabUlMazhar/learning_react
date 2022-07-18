import { useEffect, useState } from 'react';
import { Container } from './style.js';

type Props = {
  initialCount: number,
  onChange?: Function,
};

const Counter = (props: Props) => {
  const {initialCount, onChange, } = props;
  const [count, setCount] = useState<number>(initialCount);

  const onClick = () =>
  {
    setCount(c=>c+1);
  };

  useEffect(()=>{
    onChange?.(count);
  },[count, onChange, ]);
  
  return (
    <Container onClick={onClick}>
      <p>Count is: {count}</p>
    </Container>
  )
}

export default Counter;
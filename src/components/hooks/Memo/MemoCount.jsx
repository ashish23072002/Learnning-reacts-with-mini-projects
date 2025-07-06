import { memo, useRef } from "react";


//PUT THe memo here so that theire will not be extensive rendring of this childetn whaen it will be called through props then it 
// will only rendered 
export const Counts = memo(() => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <div>
      Nothing changed here but Ive now rendered:
      <span className="text-danger  ">{renderCount.current++} time(s)</span>
    </div>
  );
});

// alternate menthod 
// export default memo(Counts); 
import { memo, useRef } from "react";

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
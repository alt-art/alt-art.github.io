export function Loading() {
  return (
    <div className="flex">
      <div className="bg-primary h-7 w-2 animate-bounce"></div>
      <div className="bg-primary ml-2 h-7 w-2 animate-bounce animate-pulse"></div>
      <div className="bg-primary ml-2 h-7 w-2 animate-bounce"></div>
    </div>
  );
}

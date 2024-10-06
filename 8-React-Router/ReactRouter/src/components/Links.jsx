import { Navigation } from "../Javascript/Functions";

export function Link({ target, to, ...props }){
  
  const HandleClick = (event) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = typeof target === 'undefined' || target === '_self';
    
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      Navigation(to);
    }
  };
  return (
    <a  onClick={HandleClick}  href={ to }  target={ target } {...props} ></a>
  )

}
import { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";

const Auth = () => {
  const authRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mount(authRef.current);
  }, [mount]);
  return <div ref={authRef}>a</div>;
};
export default Auth;

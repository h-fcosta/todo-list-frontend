import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { sessionStore } from "../store/atom";

const useSession = () => {
  const [session, setSession] = useRecoilState(sessionStore);

  const handleSignIn = useCallback(
    (data: any) => {
      setSession(data);
      sessionStorage.setItem("token", data.token);
    },
    [setSession]
  );

  return {
    session,
    handleSignIn
  };
};

export default useSession;

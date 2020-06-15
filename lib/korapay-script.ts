import * as React from "react";

const loadedScripts: {
  src?: string;
} = {};

interface ScriptStatusInterface {
  loaded: boolean;
  error: boolean;
}

const src =
  "https://korablobstorage.blob.core.windows.net/modal-bucket/korapay-collections.min.js";

export default function useKorapayScript() {
  const [state, setState] = React.useState<ScriptStatusInterface>({
    loaded: false,
    error: false
  });

  React.useEffect((): any => {
    if (loadedScripts.hasOwnProperty(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      loadedScripts.src = src;

      const script = document.createElement("script");
      script.src = src;
      script.async = true;

      const onScriptLoad = (): void => {
        setState({
          loaded: true,
          error: false
        });
      };

      const onScriptError = (): void => {
        delete loadedScripts.src;

        setState({
          loaded: true,
          error: true
        });
      };

      script.addEventListener("load", onScriptLoad);
      script.addEventListener("complete", onScriptLoad);
      script.addEventListener("error", onScriptError);

      document.body.appendChild(script);

      return () => {
        script.removeEventListener("load", onScriptLoad);
        script.removeEventListener("error", onScriptError);
      };
    }
  }, []);

  return [state.loaded, state.error] as const;
}

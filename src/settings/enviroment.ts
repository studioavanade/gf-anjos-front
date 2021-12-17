interface IEnviroment {
  env: string;
  prd: IApisUrls;
  hml: IApisUrls;
  dev: IApisUrls;
}

interface IApisUrls {
  api: string;
}

const environment: IEnviroment = {
  env: "dev",
  prd: {
    api: "http://localhost:5101/api/v1",
  },
  hml: {
    api: "http://localhost:5101/api/v1",
  },
  dev: {
    api: "http://localhost:5101/api/v1",
  },
};

export const setEnviroment = (env: string) => {
  environment.env = env || environment.env;
};

export const getEnviroment = (): IApisUrls => {
  return (environment as Record<string, any>)[environment.env];
};

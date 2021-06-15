import { GetStaticProps } from "next";
import * as React from "react";
import { ModularPage } from "../components/ModularPage";
import { staticPropsByPath } from "../pokko/pokko";
import {
  GetPageByPathQuery,
  ModularPage as ModularPageModel,
} from "../pokko/queries";

const Home: React.FC<GetPageByPathQuery> = ({ entry }) => {
  if (entry?.__typename === "ModularPage") {
    return <ModularPage entry={entry as ModularPageModel} />;
  }

  return <p>Unknown page type: {entry?.__typename}</p>;
};

export const getStaticProps: GetStaticProps = async (context) =>
  await staticPropsByPath(["website", "home"], context.preview ?? false);

export default Home;

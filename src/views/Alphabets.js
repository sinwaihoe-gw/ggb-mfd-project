import React from "react";
import { Container, Row } from "shards-react";
import { useTranslation } from "react-i18next";

import PageTitle from "../components/common/PageTitle";
import AlphabetsGrid from "../components/alphabets-vocabs/AlphabetsGrid";
import Breadcrumbs from "../components/layout/Breadcrumbs/Breadcrumbs";
import { Store } from "../flux";

const Alphabets = () => {
  const { t } = useTranslation();
  const alphabets = Store.getAlphabetsList();
  return (
    <>
      <Breadcrumbs />
      <Container
        fluid
        className="main-content-container px-4 vocab-list-wrapper"
      >
        <Row noGutters className="page-header py-4">
          <PageTitle
            title={t("alphabets_title")}
            md="12"
            className="ml-sm-auto mr-sm-auto"
          />
        </Row>
        <Row>
          {alphabets.map((alpha) => (
            <AlphabetsGrid alphabets={alpha} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Alphabets;
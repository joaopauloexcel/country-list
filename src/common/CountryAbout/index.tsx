import React, { Fragment } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import { getSetCountry } from '../../apollo/cache';
import './CountryAbout.scss';

const CountryAbout = ({ country, onEdit }: any): any => {
  getSetCountry(country)
  const getApollo = getSetCountry()
  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <div className={`card-detail`} data-testid="country-about-field">
      {!!getApollo && <Fragment>
        {
          getApollo.flag && getApollo.flag.svgFile &&
          <img className={`image-flag`} src={getApollo.flag.svgFile} alt={`Bandeira ${getApollo.name || ''}`} />
        }
        <div className={`content`}>
          <div className={`title-name`}>{getApollo.name || ''}</div>
          <div className={`item-row`}>
            <span>Capital: </span>
            {getApollo.capital || 'Não informado'}
          </div>
          <div className={`item-row`}>
            <span>Área: </span>
            {getApollo.area || 'Não informado'}
          </div>
          <div className={`item-row`}>
            <span>População: </span>
            {getApollo.population || 'Não informado'}
          </div>
          <div className={`item-row`}>
            <span>Domínio: </span>
            {getApollo.topLevelDomains?.map((domain: any) => (
              <span key={domain.name} className={`item-row`}>{domain.name}</span>
            ))}
            {getApollo.topLevelDomains?.length === 0
              && <span>Não informado</span>}
          </div>
        </div>
      </Fragment>}
      <div className={`content-edit`}>
        <Tooltip title="Editar país">
          <EditIcon onClick={handleEdit} onKeyDown={handleEdit} />
        </Tooltip>
      </div>
    </div>
  );
};

export default CountryAbout;

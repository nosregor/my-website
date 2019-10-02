/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import IconCodepen from './codepen';
import IconGithub from './github';
import IconInstagram from './instagram';
import IconLinkedin from './linkedin';
import IconTwitter from './twitter';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGithub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;

import React from 'react';
import styles from './SocialIconComponent.module.scss'
import { socialIcons } from '../../../utils/socialIcons';

const SocialIconComponent = ({ type, className }) => {
  const socialIcon = socialIcons.find(iconObj => iconObj.type === type);
  const Icon = socialIcon ? socialIcon.icon : null;

  return Icon ? <Icon className={className}/> : null;
};

export default SocialIconComponent;
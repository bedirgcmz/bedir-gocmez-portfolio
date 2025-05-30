import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type SocialItem = {
  icon: IconDefinition;
  url: string;
};

const socialItems: SocialItem[] = [
  { icon: faLinkedin, url: 'https://linkedin.com/in/bedirgocmez' },
  { icon: faGithub, url: 'https://github.com/bedirgocmez' },
  // { icon: faInstagram, url: 'https://instagram.com/bedirgocmez' },
  // { icon: faXTwitter, url: 'https://twitter.com/bedirgocmez' },
];

const SocialMediaIcon = ({ icon, url }: SocialItem) => (
  <a href={url} target="_blank" rel="noopener noreferrer" aria-label='social media link'>
    <FontAwesomeIcon icon={icon} className="h-6 hover:scale-125 transition" />
  </a>
);

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-6 mb-8 z-10">
      {socialItems.map((item, index) => (
        <SocialMediaIcon key={index} icon={item.icon} url={item.url} />
      ))}
    </div>
  );
};

export default SocialMediaIcons;

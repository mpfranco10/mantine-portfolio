import { Stack, Tooltip, UnstyledButton, rem } from '@mantine/core';
import {
  IconAddressBook,
  IconBook,
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconHome2,
  IconUserCode,
  IconUserHeart,
} from '@tabler/icons-react';
import { useState } from 'react';

import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(24), height: rem(24) }} stroke={1.75} />
      </UnstyledButton>
    </Tooltip>
  );
};

const sectionsList = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconUserCode, label: 'Skills' },
  { icon: IconBriefcase, label: 'Experience' },
  { icon: IconBook, label: 'Education' },
  { icon: IconCode, label: 'Projects' },
  { icon: IconCertificate, label: 'Certificates' },
  { icon: IconUserHeart, label: 'Interests' },
  { icon: IconAddressBook, label: 'Contact' },
];

export const Navbar = () => {
  const [active, setActive] = useState(2);

  const links = sectionsList.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={rem(20)}>
          {links}
        </Stack>
      </div>
    </nav>
  );
};

'use client';

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavbarMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Navbar fluid rounded border>
      <Navbar.Brand>
        <Image src={`/images/logo.png`} alt="logo" width={20} height={20} />
        <span className="self-center whitespace-nowrap text-xl font-semibold">{`${process.env.NEXT_PUBLIC_APP_TITLE}`}</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Benggri</span>
          </Dropdown.Header>
          <Dropdown.Item>I&#x27;m developer with</Dropdown.Item>
          <Dropdown.Item>Java & Spring Boot</Dropdown.Item>
          <Dropdown.Item>Next.js</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Thank you</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link>
          <Dropdown inline label={"Front end"}>
            <Dropdown.Item>Javascript</Dropdown.Item>
            <Dropdown.Item>Node.js</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Next.js</Dropdown.Item>
          </Dropdown> 
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown inline label={"Back end"}>
            <Dropdown.Item>Java</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Spring Boot</Dropdown.Item>
          </Dropdown> 
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown inline label={"Containers"}>
            <Dropdown.Item>Docker</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Kubernetes</Dropdown.Item>
          </Dropdown> 
        </Navbar.Link>
        <Navbar.Link>
          <Dropdown inline label={"Tools"}>
            <Dropdown.Item>VS Code</Dropdown.Item>
          </Dropdown> 
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
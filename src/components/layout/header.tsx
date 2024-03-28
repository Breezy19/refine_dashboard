import { Layout, Space } from "antd"
import CurrentUser from "./current-user"

const Header = () => {

  const headerStyles: React.CSSProperties = {
    background: '#fff',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    padding: '0px 24px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  }

  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size="middle">
        <CurrentUser />
      </Space>
    </Layout.Header>
  )
}

export default Header
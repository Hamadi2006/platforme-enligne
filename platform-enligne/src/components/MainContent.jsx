import React from 'react'
import { useSelector } from "react-redux";
import HTMLSection from './HTMLSection.jsx';
import CSSSection from './CSSSection.jsx';
import JavaScriptSection from './JavaScriptSection.jsx';
import ReactSection from './ReactSection.jsx';
import PHPSection from './PHPSection.jsx';
import LaravelSection from './LaravelSection.jsx';
import NodeJSSection from './NodeJSSection.jsx';
import SQLSection from './SQLSection.jsx';
import MySQLSection from './MySQLSection.jsx';
import GitSection from './GitSection.jsx';





function MainContent() {
    const currentContent = useSelector((state) => state.ActiveItem.activeItem);
      switch (currentContent) {
      case 'html':
        return <HTMLSection />;
      case 'css':
        return <CSSSection />;
      case 'javascript':
        return <JavaScriptSection />;
      case 'react':
        return <ReactSection />;
      case 'php':
        return <PHPSection />;
      case 'laravel':
        return <LaravelSection />;
      case 'nodejs':
        return <NodeJSSection />;
      case 'sql':
        return <SQLSection />;
      case 'mysql':
        return <MySQLSection />;
      case 'git':
        return <GitSection />;

      default:
        return <HTMLSection />;
    }

}

export default MainContent
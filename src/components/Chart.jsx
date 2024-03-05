import Trading from './TradingView';
import {useState, useEffect} from 'react';

export function Chart() {
    const [showTradingView, setShowTradingView] = useState(false);
    useEffect(() => {
        setShowTradingView(true);
    }, [])

    return (
        <div>
            {showTradingView && <Trading />}
        </div>
    )
}
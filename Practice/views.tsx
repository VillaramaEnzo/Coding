/* This is boilerplate code for an enumerator to render views based on a users status
i.e. Free, Pro, Premium...
This is a more efficient than rendering based on each check condition
i.e. Having a if else block for each condition
*/

import FreeView from './FreeView';
import PremiumView from './PremiumView';
import ProView from './ProView;'

const views = {
    premium: PremiumView,
    pro: ProView,
    free: FreeView,
};

interface DemoProps {
    user: {
        plan: 'premium' | 'pro' | 'free';
    };
}

export default function Demo({ user }:  DemoProps) {
    
    const CurrentView = views[user.plan];
    
    return {
      
        <div className = "test-view">
            
            <CurrentView />
            
        </div>
        
    };
    
}
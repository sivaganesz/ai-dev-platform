import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop, Monitor } from "lucide-react";

interface ThemeModeSelectorProps {
  selected: 'light' | 'dark' | 'system';
  onSelect: (mode: 'light' | 'dark' | 'system') => void;
}

export function ThemeModeSelector({ selected, onSelect }: ThemeModeSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Monitor className="h-4 w-4 text-primary" />
          Global Theme Mode
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          <Button 
            variant={selected === 'light' ? 'default' : 'outline'} 
            className="flex flex-col gap-2 h-auto py-4"
            onClick={() => onSelect('light')}
          >
            <Sun className="h-5 w-5" />
            <span className="text-[10px] font-bold uppercase">Light</span>
          </Button>
          <Button 
            variant={selected === 'dark' ? 'default' : 'outline'} 
            className="flex flex-col gap-2 h-auto py-4"
            onClick={() => onSelect('dark')}
          >
            <Moon className="h-5 w-5" />
            <span className="text-[10px] font-bold uppercase">Dark</span>
          </Button>
          <Button 
            variant={selected === 'system' ? 'default' : 'outline'} 
            className="flex flex-col gap-2 h-auto py-4"
            onClick={() => onSelect('system')}
          >
            <Laptop className="h-5 w-5" />
            <span className="text-[10px] font-bold uppercase">System</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

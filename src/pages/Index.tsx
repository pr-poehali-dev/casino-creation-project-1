import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'games' | 'profile' | 'wallet' | 'support' | 'terms'>('home');
  const [balance, setBalance] = useState(15000);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const games = [
    { id: 1, title: 'Lucky 7s', category: 'Слоты', rtp: '96.5%', image: '🎰', popular: true },
    { id: 2, title: 'Royal Blackjack', category: 'Карты', rtp: '99.4%', image: '🃏', popular: true },
    { id: 3, title: 'Mega Roulette', category: 'Рулетка', rtp: '97.3%', image: '🎡', popular: false },
    { id: 4, title: 'Diamond Rush', category: 'Слоты', rtp: '95.8%', image: '💎', popular: true },
    { id: 5, title: 'Poker Stars', category: 'Карты', rtp: '98.1%', image: '♠️', popular: false },
    { id: 6, title: 'Fruit Jackpot', category: 'Слоты', rtp: '94.2%', image: '🍒', popular: false },
  ];

  const paymentMethods = [
    { id: 'card', name: 'Банковская карта', icon: 'CreditCard', fee: '0%' },
    { id: 'wallet', name: 'Электронный кошелёк', icon: 'Wallet', fee: '2%' },
    { id: 'crypto', name: 'Криптовалюта', icon: 'Bitcoin', fee: '1%' },
  ];

  const transactions = [
    { id: 1, type: 'deposit', amount: 5000, date: '21.01.2026', method: 'Карта' },
    { id: 2, type: 'win', amount: 12000, date: '20.01.2026', method: 'Lucky 7s' },
    { id: 3, type: 'withdraw', amount: 2000, date: '19.01.2026', method: 'Кошелёк' },
  ];

  const renderHome = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary p-12 text-center">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Добро пожаловать в казино</h1>
          <p className="text-lg mb-6 opacity-90">Минималистичный дизайн. Честная игра. Быстрые выплаты.</p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
            Начать играть
          </Button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Популярные игры</h2>
          <Button variant="ghost" onClick={() => setCurrentPage('games')}>
            Все игры <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.filter(g => g.popular).map((game) => (
            <Card key={game.id} className="hover-scale cursor-pointer group overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-5xl mb-2">{game.image}</div>
                  <Badge variant="secondary">{game.category}</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{game.title}</CardTitle>
                <CardDescription>RTP: {game.rtp}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="default">Играть</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <Icon name="Shield" className="mb-2 text-primary" size={32} />
            <CardTitle>Лицензия</CardTitle>
            <CardDescription>Официальная лицензия Кюрасао</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Icon name="Zap" className="mb-2 text-secondary" size={32} />
            <CardTitle>Быстрые выплаты</CardTitle>
            <CardDescription>Вывод средств за 24 часа</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Icon name="HeadphonesIcon" className="mb-2 text-primary" size={32} />
            <CardTitle>Поддержка 24/7</CardTitle>
            <CardDescription>Всегда на связи для вас</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );

  const renderGames = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Все игры</h1>
        <div className="flex gap-2">
          <Input placeholder="Поиск игр..." className="w-64" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="slots">Слоты</TabsTrigger>
          <TabsTrigger value="cards">Карты</TabsTrigger>
          <TabsTrigger value="roulette">Рулетка</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Card key={game.id} className="hover-scale cursor-pointer">
                <CardHeader>
                  <div className="text-5xl mb-2 text-center">{game.image}</div>
                  <CardTitle className="text-center">{game.title}</CardTitle>
                  <CardDescription className="text-center">RTP: {game.rtp}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Играть</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarFallback className="bg-primary text-2xl">ИП</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">Игрок #12345</h1>
          <p className="text-muted-foreground">Участник с 15.01.2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardDescription>Баланс</CardDescription>
            <CardTitle className="text-3xl">{balance.toLocaleString()} ₽</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Всего ставок</CardDescription>
            <CardTitle className="text-3xl">127</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Выигрышей</CardDescription>
            <CardTitle className="text-3xl">43</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>История транзакций</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <Icon 
                    name={tx.type === 'deposit' ? 'ArrowDownToLine' : tx.type === 'win' ? 'Trophy' : 'ArrowUpFromLine'} 
                    className={tx.type === 'win' ? 'text-green-500' : tx.type === 'withdraw' ? 'text-orange-500' : 'text-blue-500'}
                  />
                  <div>
                    <p className="font-medium">{tx.method}</p>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <p className={`font-semibold ${tx.type === 'win' ? 'text-green-500' : ''}`}>
                  {tx.type === 'withdraw' ? '-' : '+'}{tx.amount.toLocaleString()} ₽
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderWallet = () => (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <h1 className="text-3xl font-bold">Кошелёк</h1>

      <Card>
        <CardHeader>
          <CardTitle>Текущий баланс</CardTitle>
          <div className="text-4xl font-bold text-primary mt-2">{balance.toLocaleString()} ₽</div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deposit">Пополнить</TabsTrigger>
          <TabsTrigger value="withdraw">Вывести</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Выберите способ пополнения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover-scale ${
                    selectedPayment === method.id ? 'border-primary bg-primary/10' : 'border-border'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name={method.icon as any} size={24} />
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">Комиссия: {method.fee}</p>
                      </div>
                    </div>
                    <Icon 
                      name="CheckCircle2" 
                      className={selectedPayment === method.id ? 'text-primary' : 'text-muted'} 
                    />
                  </div>
                </div>
              ))}
              <Input placeholder="Сумма пополнения" type="number" className="mt-4" />
              <Button className="w-full" size="lg">Пополнить баланс</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="withdraw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Вывод средств</CardTitle>
              <CardDescription>Доступно для вывода: {balance.toLocaleString()} ₽</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Сумма вывода" type="number" />
              <Button className="w-full" size="lg">Вывести средства</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-3xl font-bold">Поддержка</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover-scale">
          <CardHeader>
            <Icon name="MessageCircle" className="mb-2 text-primary" size={32} />
            <CardTitle>Онлайн-чат</CardTitle>
            <CardDescription>Ответ за 2 минуты</CardDescription>
          </CardHeader>
        </Card>
        <Card className="cursor-pointer hover-scale">
          <CardHeader>
            <Icon name="Mail" className="mb-2 text-secondary" size={32} />
            <CardTitle>Email</CardTitle>
            <CardDescription>support@casino.com</CardDescription>
          </CardHeader>
        </Card>
        <Card className="cursor-pointer hover-scale">
          <CardHeader>
            <Icon name="Send" className="mb-2 text-primary" size={32} />
            <CardTitle>Telegram</CardTitle>
            <CardDescription>@casino_support</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Часто задаваемые вопросы</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Как пополнить баланс?</AccordionTrigger>
              <AccordionContent>
                Перейдите в раздел "Кошелёк", выберите способ оплаты и укажите сумму пополнения. Средства зачисляются мгновенно.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Сколько времени занимает вывод?</AccordionTrigger>
              <AccordionContent>
                Обработка заявки на вывод занимает до 24 часов. На банковские карты средства поступают в течение 1-3 рабочих дней.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Что такое RTP?</AccordionTrigger>
              <AccordionContent>
                RTP (Return to Player) — процент ставок, который игра возвращает игрокам в долгосрочной перспективе. Например, RTP 96% означает, что из 100₽ ставок игра вернёт 96₽.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Есть ли лимиты на ставки?</AccordionTrigger>
              <AccordionContent>
                Минимальная ставка — 10₽. Максимальная зависит от игры и обычно составляет от 5000₽ до 50000₽.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );

  const renderTerms = () => (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <h1 className="text-3xl font-bold">Условия использования</h1>

      <Card>
        <CardHeader>
          <CardTitle>1. Общие положения</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Настоящие Правила регулируют взаимоотношения между Оператором онлайн-казино и Пользователем.</p>
          <p>Регистрируясь на сайте, Пользователь подтверждает, что достиг 18-летнего возраста и принимает условия данного соглашения.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Лицензия и безопасность</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Казино работает по лицензии Кюрасао №8048/JAZ2022-067.</p>
          <p>Все транзакции защищены SSL-шифрованием. Персональные данные обрабатываются согласно GDPR.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Пополнение и вывод средств</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Минимальная сумма пополнения — 500₽. Минимальная сумма вывода — 1000₽.</p>
          <p>Вывод средств осуществляется на тот же способ оплаты, который использовался для пополнения.</p>
          <p>Комиссия за вывод зависит от способа и указана в разделе "Кошелёк".</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Ответственная игра</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Мы поддерживаем принципы ответственной игры и предоставляем инструменты самоограничения.</p>
          <p>Пользователь может установить лимиты на депозиты, ставки и время игры в настройках профиля.</p>
          <p>При возникновении признаков игровой зависимости обратитесь в службу поддержки.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>5. Бонусы и акции</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>Бонусы предоставляются согласно условиям конкретных акций.</p>
          <p>Вейджер (требование по отыгрышу) указывается для каждого бонуса отдельно.</p>
          <p>Оператор оставляет за собой право аннулировать бонус при нарушении условий.</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
                CASINO
              </h1>
              <div className="hidden md:flex gap-6">
                <button onClick={() => setCurrentPage('home')} className={`font-medium transition-colors ${currentPage === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  Главная
                </button>
                <button onClick={() => setCurrentPage('games')} className={`font-medium transition-colors ${currentPage === 'games' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  Игры
                </button>
                <button onClick={() => setCurrentPage('support')} className={`font-medium transition-colors ${currentPage === 'support' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  Поддержка
                </button>
                <button onClick={() => setCurrentPage('terms')} className={`font-medium transition-colors ${currentPage === 'terms' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  Условия
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setCurrentPage('wallet')}>
                <Icon name="Wallet" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setCurrentPage('profile')}>
                <Icon name="User" />
              </Button>
              <div className="hidden md:block">
                <Badge variant="secondary" className="px-4 py-2 text-base font-semibold">
                  {balance.toLocaleString()} ₽
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'games' && renderGames()}
        {currentPage === 'profile' && renderProfile()}
        {currentPage === 'wallet' && renderWallet()}
        {currentPage === 'support' && renderSupport()}
        {currentPage === 'terms' && renderTerms()}
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CASINO</h3>
              <p className="text-sm text-muted-foreground">Минималистичный дизайн. Честная игра. Быстрые выплаты.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Игры</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground">Слоты</li>
                <li className="cursor-pointer hover:text-foreground">Карты</li>
                <li className="cursor-pointer hover:text-foreground">Рулетка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground">О нас</li>
                <li className="cursor-pointer hover:text-foreground">Условия</li>
                <li className="cursor-pointer hover:text-foreground">Политика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="cursor-pointer hover:text-foreground">FAQ</li>
                <li className="cursor-pointer hover:text-foreground">Контакты</li>
                <li className="cursor-pointer hover:text-foreground">Чат</li>
              </ul>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Casino. Лицензия Кюрасао №8048/JAZ2022-067</p>
            <div className="flex gap-4">
              <Icon name="Facebook" size={20} className="cursor-pointer hover:text-foreground" />
              <Icon name="Twitter" size={20} className="cursor-pointer hover:text-foreground" />
              <Icon name="Instagram" size={20} className="cursor-pointer hover:text-foreground" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

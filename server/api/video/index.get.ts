export default defineEventHandler(async event => {
	const query = getQuery(event)
	console.log(query)
	const data = [
		{
			title: '如果你会玩塞拉斯，你应该知道这种开局有多绝望！',
			cover: '',
			author: 'a安欢欢',
			date: '5-21',
			duration: '09:10',
			playCount: '48825',
			danmakuCount: '164',
		},
		{
			title: '不是! 十一层这么难打吗?',
			cover: '',
			author: '月初原神',
			date: '22小时前',
			duration: '15:57',
			playCount: '5.3万',
			danmakuCount: '293',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title: '如果你会玩塞拉斯，你应该知道这种开局有多绝望！',
			cover: '',
			author: 'a安欢欢',
			date: '5-21',
			duration: '09:10',
			playCount: '48825',
			danmakuCount: '164',
		},
		{
			title: '不是! 十一层这么难打吗?',
			cover: '',
			author: '月初原神',
			date: '22小时前',
			duration: '15:57',
			playCount: '5.3万',
			danmakuCount: '293',
		},
		{
			title: '如果你会玩塞拉斯，你应该知道这种开局有多绝望！',
			cover: '',
			author: 'a安欢欢',
			date: '5-21',
			duration: '09:10',
			playCount: '48825',
			danmakuCount: '164',
		},
		{
			title: '不是! 十一层这么难打吗?',
			cover: '',
			author: '月初原神',
			date: '22小时前',
			duration: '15:57',
			playCount: '5.3万',
			danmakuCount: '293',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title:
				'新版本新版飞机版本答案！爆穿流伤害根本无解！无脑点地乱A就能杀人！',
			cover: '',
			author: '下饭联盟BestLeagueTV',
			date: '6-11',
			duration: '11:21',
			playCount: '1.1万',
			danmakuCount: '19',
		},
		{
			title: '如果你会玩塞拉斯，你应该知道这种开局有多绝望！',
			cover: '',
			author: 'a安欢欢',
			date: '5-21',
			duration: '09:10',
			playCount: '48825',
			danmakuCount: '164',
		},
		{
			title: '不是! 十一层这么难打吗?',
			cover: '',
			author: '月初原神',
			date: '22小时前',
			duration: '15:57',
			playCount: '5.3万',
			danmakuCount: '293',
		}
	]
	return data
})

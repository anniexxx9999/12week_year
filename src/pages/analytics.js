// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    initDateRangePicker();
    initExportModal();
    initViewControls();
});

// 初始化所有图表
function initCharts() {
    // 设置Chart.js全局配置
    Chart.defaults.font.family = '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif';
    Chart.defaults.font.size = 12;
    Chart.defaults.color = '#666666';

    // 初始化各个图表
    initGoalCompletionChart();
    initTaskCompletionChart();
    initTimeInvestmentChart();
    initEfficiencyChart();
    initGoalTrendChart();
    initGoalTypeChart();
    initGoalStatusChart();
    initTaskCompletionTrendChart();
    initTaskQuadrantChart();
    initTaskDelayChart();
    initDailyTimeChart();
    initEfficiencyTrendChart();
    initTimeUtilizationChart();
}

// 目标完成率环形图
function initGoalCompletionChart() {
    const ctx = document.getElementById('goalCompletionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['已完成', '进行中'],
            datasets: [{
                data: [75, 25],
                backgroundColor: [
                    'var(--primary-500)',
                    'var(--neutral-200)'
                ],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 任务完成率环形图
function initTaskCompletionChart() {
    const ctx = document.getElementById('taskCompletionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['已完成', '待完成'],
            datasets: [{
                data: [68, 32],
                backgroundColor: [
                    'var(--success-500)',
                    'var(--neutral-200)'
                ],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 时间投入饼图
function initTimeInvestmentChart() {
    const ctx = document.getElementById('timeInvestmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['工作', '学习', '运动', '其他'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'var(--primary-500)',
                    'var(--success-500)',
                    'var(--warning-500)',
                    'var(--neutral-300)'
                ],
                borderWidth: 0,
                cutout: '75%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 效率指标折线图
function initEfficiencyChart() {
    const ctx = document.getElementById('efficiencyChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [{
                label: '效率指标',
                data: [85, 88, 92, 90, 95, 88, 92],
                borderColor: 'var(--primary-500)',
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: value => value + '%'
                    }
                }
            }
        }
    });
}

// 目标完成趋势图
function initGoalTrendChart() {
    const ctx = document.getElementById('goalTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周'],
            datasets: [{
                label: '完成率',
                data: [20, 35, 45, 55, 65, 75, 80, 85],
                borderColor: 'var(--primary-500)',
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: '目标数',
                data: [5, 6, 8, 8, 10, 12, 12, 12],
                borderColor: 'var(--primary-200)',
                borderDash: [5, 5],
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => value + '%'
                    }
                }
            }
        }
    });
}

// 目标类型分布图
function initGoalTypeChart() {
    const ctx = document.getElementById('goalTypeChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['工作目标', '学习目标', '生活目标', '其他目标'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'var(--primary-500)',
                    'var(--success-500)',
                    'var(--warning-500)',
                    'var(--neutral-300)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// 目标状态分布图
function initGoalStatusChart() {
    const ctx = document.getElementById('goalStatusChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['进行中', '已完成', '已延期', '已放弃'],
            datasets: [{
                data: [8, 6, 2, 1],
                backgroundColor: [
                    'var(--primary-500)',
                    'var(--success-500)',
                    'var(--warning-500)',
                    'var(--error-500)'
                ],
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// 任务完成趋势图
function initTaskCompletionTrendChart() {
    const ctx = document.getElementById('taskCompletionTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [{
                label: '已完成',
                data: [5, 8, 12, 15, 20, 25, 30],
                borderColor: 'var(--success-500)',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                fill: true
            }, {
                label: '进行中',
                data: [8, 10, 8, 6, 4, 3, 2],
                borderColor: 'var(--warning-500)',
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true
                }
            }
        }
    });
}

// 任务四象限分布图
function initTaskQuadrantChart() {
    const ctx = document.getElementById('taskQuadrantChart').getContext('2d');
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '重要且紧急',
                data: [
                    {x: 8, y: 9},
                    {x: 9, y: 8},
                    {x: 7, y: 8}
                ],
                backgroundColor: 'var(--error-500)'
            }, {
                label: '重要不紧急',
                data: [
                    {x: 8, y: 3},
                    {x: 9, y: 2},
                    {x: 7, y: 4}
                ],
                backgroundColor: 'var(--warning-500)'
            }, {
                label: '紧急不重要',
                data: [
                    {x: 3, y: 8},
                    {x: 2, y: 9},
                    {x: 4, y: 7}
                ],
                backgroundColor: 'var(--info-500)'
            }, {
                label: '不重要不紧急',
                data: [
                    {x: 3, y: 3},
                    {x: 2, y: 2},
                    {x: 4, y: 4}
                ],
                backgroundColor: 'var(--neutral-400)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '重要性'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    title: {
                        display: true,
                        text: '紧急性'
                    },
                    min: 0,
                    max: 10
                }
            }
        }
    });
}

// 任务延期分析图
function initTaskDelayChart() {
    const ctx = document.getElementById('taskDelayChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['无延期', '1天内', '1-3天', '3-7天', '7天以上'],
            datasets: [{
                label: '任务数',
                data: [45, 15, 8, 5, 2],
                backgroundColor: [
                    'var(--success-500)',
                    'var(--warning-500)',
                    'var(--warning-600)',
                    'var(--error-500)',
                    'var(--error-600)'
                ],
                borderWidth: 0,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });
}

// 每日时间分配图
function initDailyTimeChart() {
    const ctx = document.getElementById('dailyTimeChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            datasets: [{
                label: '工作',
                data: [6, 5.5, 6, 5, 5.5, 2, 1],
                backgroundColor: 'var(--primary-500)',
                stack: 'Stack 0'
            }, {
                label: '学习',
                data: [2, 2.5, 2, 3, 2, 4, 3],
                backgroundColor: 'var(--success-500)',
                stack: 'Stack 0'
            }, {
                label: '运动',
                data: [1, 1, 1.5, 1, 1, 2, 2],
                backgroundColor: 'var(--warning-500)',
                stack: 'Stack 0'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end'
                }
            },
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    ticks: {
                        callback: value => value + 'h'
                    }
                }
            }
        }
    });
}

// 效率趋势图
function initEfficiencyTrendChart() {
    const ctx = document.getElementById('efficiencyTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
            datasets: [{
                label: '效率指数',
                data: [75, 85, 90, 70, 60, 80, 85, 88, 85, 75],
                borderColor: 'var(--primary-500)',
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: value => value + '%'
                    }
                }
            }
        }
    });
}

// 时间利用率图
function initTimeUtilizationChart() {
    const ctx = document.getElementById('timeUtilizationChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['核心工作', '会议沟通', '学习成长', '其他活动'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'var(--primary-500)',
                    'var(--warning-500)',
                    'var(--success-500)',
                    'var(--neutral-300)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// 初始化日期范围选择器
function initDateRangePicker() {
    const dateRangePicker = document.querySelector('.date-range-picker');
    const buttons = dateRangePicker.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateChartsByDateRange(button.textContent);
        });
    });
}

// 根据日期范围更新图表
function updateChartsByDateRange(range) {
    // TODO: 根据选择的日期范围更新各个图表的数据
    console.log('更新图表数据，范围：', range);
}

// 初始化导出报告弹窗
function initExportModal() {
    const exportBtn = document.querySelector('.header-actions .btn-secondary');
    const modal = document.getElementById('exportModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelExportBtn');
    const confirmBtn = document.getElementById('confirmExportBtn');

    exportBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    [closeBtn, cancelBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });

    confirmBtn.addEventListener('click', () => {
        exportReport();
        modal.classList.remove('active');
    });
}

// 导出报告
function exportReport() {
    const form = document.getElementById('exportForm');
    const formData = new FormData(form);
    const data = {
        reportType: formData.get('reportType'),
        content: formData.getAll('content'),
        format: formData.get('format')
    };

    // TODO: 处理报告导出
    console.log('导出报告：', data);
}

// 初始化视图控制
function initViewControls() {
    const viewControls = document.querySelectorAll('.view-controls');
    
    viewControls.forEach(control => {
        const buttons = control.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                updateChartsByView(button.textContent);
            });
        });
    });
}

// 根据视图��型更新图表
function updateChartsByView(view) {
    // TODO: 根据选择的视图类型更新相关图表的数据
    console.log('更新图表视图：', view);
} 
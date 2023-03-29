import notifee, {
  AndroidChannel,
  Notification,
  TimestampTrigger,
} from '@notifee/react-native'

export const useNotification = () => {
  // Create a channel required for Android Notifications
  async function createChannel(channel: AndroidChannel) {
    const channelId = await notifee.createChannel(channel)
    return channelId
  }

  async function requestPermission() {
    await notifee.requestPermission()
  }

  async function displayNotification(notification: Notification) {
    const notificationId = await notifee.displayNotification(notification)
    return notificationId
  }

  async function displayTriggerNotification(
    notification: Notification,
    trigger: TimestampTrigger
  ) {
    const triggerNotificationId = await notifee.createTriggerNotification(
      notification,
      trigger
    )
    return triggerNotificationId
  }

  async function getTriggerNotificationIds() {
    const triggerNotificationIds = await notifee.getTriggerNotificationIds()
    return triggerNotificationIds
  }

  async function cancelTriggerNotifications(notificationIds?: string[]) {
    await notifee.cancelTriggerNotifications(notificationIds)
  }

  async function cancelAllNotifications() {
    await notifee.cancelAllNotifications()
  }

  async function cancelNotification(notificationId: string, tag?: string) {
    await notifee.cancelNotification(notificationId, tag)
  }

  return {
    createChannel,
    requestPermission,
    displayNotification,
    displayTriggerNotification,
    getTriggerNotificationIds,
    cancelTriggerNotifications,
    cancelAllNotifications,
    cancelNotification,
  }
}
